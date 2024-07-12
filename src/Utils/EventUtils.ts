import { Event } from '../Services/ContentfulService';
import isFuture from 'date-fns/isFuture';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';

export class EventUtils {
    static isFutureEvent(event: Event): boolean {
        const eventDate = parseISO(event.date);
        return isFuture(eventDate) || isToday(eventDate);
    }
}