export const responseFailure = error => ({ success: false, error, data: null });

export const responseSuccess  = data => ({ success: true, data, error: null });
