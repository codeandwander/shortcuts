import { Shortcut } from '../_components/ShortcutForm';

export const getModifiedConfigValues = (shortcut: Shortcut, formValues: Record<string, any>) => {
  const differentValues: Record<string, any> = {};
  shortcut.fields.forEach((field) => {
    if (field.type === 'group') {
      field.fields?.forEach((subField) => {
        if (shortcut.includeAllValues || (formValues[field.id] && formValues[field.id][subField.id] !== subField.defaultValue)) {
          if (!differentValues[field.id]) differentValues[field.id] = {};
          differentValues[field.id][subField.id] = formValues[field.id][subField.id];
        }
      });
    } else if (shortcut.includeAllValues || formValues[field.id] !== field.defaultValue) {
      differentValues[field.id] = formValues[field.id];
    }
  });
  return differentValues;
};

export const copyToClipboard = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      if (!successful) {
        throw new Error('Unable to copy text');
      }
      resolve();
    } catch (err) {
      reject(err);
    } finally {
      document.body.removeChild(textArea);
    }
  });
};