import { Rule } from 'eslint';
import resolve from 'resolve';
import * as path from 'path';

const checkIfModule = (importPath: string): boolean => {
  try {
    resolve.sync(importPath, { basedir: path.join(process.cwd(), 'node_modules') });
    return true;
  } catch (err) {
    try {
      resolve.sync(importPath, { basedir: path.join(process.cwd(), 'node_modules/@types/') });
    } catch (err) {
      return false
    }
  }
}

const noAbsoluteImportsRule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow absolute import paths',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
  },
  create: (context: Rule.RuleContext) => {
    return {
      ImportDeclaration: (node) => {
        const importPath = node.source.value as string;

        if (!importPath.startsWith('.') && !importPath.startsWith('..')) {
          if (!checkIfModule(importPath)) {
            context.report({
              node,
              message: 'Import statements should use a relative path',
            });
          }
        }
      }
    };
  }
};

module.exports = {
  rules: {
    'no-absolute-imports': noAbsoluteImportsRule,
  }
};

