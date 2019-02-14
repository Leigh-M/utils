/* eslint-env browser */

document.addEventListener('DOMContentLoaded', () => {
  // Create a container for validation rule names.
  const ruleNames = [];
  const ruleElements = document.querySelectorAll('[data-rule]');

  const validateAgainstPattern = (element, pattern, ruleName) => {
    if (element.value.match(pattern)) {
      element.setCustomValidity('invalid');

      element.nextElementSibling
        .querySelector(`[data-rule="${ruleName}"]`)
        .classList
        .remove('hide');
    } else {
      element.setCustomValidity('');
    }
  };

  const validateAgainstCustomRules = () => {
    validateAgainstPattern(document.getElementById('email'), /@aol.com/i, 'isAol');
  };

  ruleElements.forEach((element) => {
    const ruleName = element.getAttribute('data-rule');
    if (ruleNames.indexOf(ruleName) === -1) {
      ruleNames.push(ruleName);
    }
  });

  /* this was the original, as it's a Nodelist, you can still iterate over listNode
  [].forEach.call(ruleElements, (element) => {
    const ruleName = element.getAttribute('data-rule');
    if (ruleNames.indexOf(ruleName) === -1) {
      ruleNames.push(ruleName);
    }
  });
  */

  const validate = () => {
    const messageElements = document.querySelectorAll('.validation-messages span');

    [].forEach.call(messageElements, (element) => {
      element.classList.add('hide');
    });

    validateAgainstCustomRules();
    document.getElementById('change-email-form').checkValidity();
  };

  const checkRule = (state, ruleName, element) => {
    if (state[ruleName]) {
      const rules = element
        .nextElementSibling
        .querySelectorAll(`[data-rule="${ruleName}"]`);

      [].forEach.call(rules, (rule) => {
        rule.classList.remove('hide');
      });
    }
  };

  const validationFail = (e) => {
    const element = e.currentTarget;
    const { validity } = element;

    if (!validity.valid) {
      ruleNames.forEach((ruleName) => {
        checkRule(validity, ruleName, element);
      });

      e.preventDefault();
    }
  };

  const inputElements = document.querySelectorAll('input:not(button)');
  [].forEach.call(inputElements, (Input) => {
    const input = Input;
    input.oninvalid = validationFail;
    input.onblur = validate;
  });

  document.getElementById('login-button').addEventListener('click', validate, false);
});
