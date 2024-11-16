const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким емэйил не найден',
    INVALID_PASSWORD: 'Пароль неверный',
    INVALID_LOGIN_CREDENTIALS: 'Пароль неверный',
    auth : 'Пожалуйста войдите в систему'
}


export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'

}