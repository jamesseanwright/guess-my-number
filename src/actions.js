export const UPDATE_MIN = 'UPDATE_MIN';
export const UPDATE_MAX = 'UPDATE_MAX';

export function updateMin() {
    return {
        type: UPDATE_MIN
    };
}

export function updateMax() {
    return {
        type: UPDATE_MAX
    };
}