export default class DateUtils {

    static formatForDisplay(date: Date): string {
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(date);
        return `${mo} ${da}, ${ye}`;
    }
}
