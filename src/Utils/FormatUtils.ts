import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export class FormatUtils {
    static formatIsoDate(isoDate: string, dateFormat: string): string {
        const date = parseISO(isoDate);
        return format(date, dateFormat);
    }
}