export function convertToUtcFormat(dateString: string): string {
    const localDate = new Date(`${dateString}T00:00:00+07:00`);
    return localDate.toISOString().split('.')[0] + 'Z';
}

export function formatDateToID(dateString: string): string {
    const date = new Date(`${dateString}T00:00:00+07:00`);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    return new Intl.DateTimeFormat('id-ID', options).format(date);
}