export default class DateUtils {

    static formatForDisplay(date: Date): string {
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        // @ts-ignore
        const [{ value: mo }, , { value: da }, , { value: ye }] = (dtf as Intl.DateTimeFormat).formatToParts(date);
        return `${mo} ${da}, ${ye}`;
    }
}
