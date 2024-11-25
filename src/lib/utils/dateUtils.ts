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

export function formatDateToEN(dateString: string): string {
    const date = new Date(`${dateString}T00:00:00+07:00`);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    return new Intl.DateTimeFormat('en-EN', options).format(date);
}

export function formatUtcDateSimple(utcDateString: string, locale: 'id-ID' | 'en-US' = 'id-ID'): string {
    const date = new Date(utcDateString);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    return new Intl.DateTimeFormat(locale, options).format(date);
}

export function formatDateForQuery(date: Date): string{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const convertToUtcForID = (dateStr: string): string => {
    const date = new Date(dateStr);
    date.setHours(7, 0, 0, 0); 
    
    return date.toISOString();
};

export function convertToUTCForTimeSpan (date: string, time: string): string {
    const [year, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');
    
    // Buat objek Date dengan waktu Jakarta (WIB)
    const jakartaDate = new Date(Date.UTC(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    ));
  
    // Tambahkan offset 7 jam (Jakarta UTC+7)
    jakartaDate.setHours(jakartaDate.getHours() - 7);
  
    return jakartaDate.toISOString();
  };