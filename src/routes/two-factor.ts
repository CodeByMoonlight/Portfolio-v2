type FormMethod = 'delete' | 'get' | 'post' | 'put' | 'patch';

const createFormHelper = (action: string, method: FormMethod = 'post') => ({
    action,
    method,
});

export const confirm = {
    form: () => createFormHelper('/two-factor/confirm'),
};

export const regenerateRecoveryCodes = {
    form: () => createFormHelper('/two-factor/recovery-codes'),
};