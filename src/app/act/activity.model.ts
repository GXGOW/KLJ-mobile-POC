export class Activity {
    private _id: string;
    private _title: string;
    private _description: string;
    private _organisedBy: string;
    private _date: Date;
    private _location: string;
    private _attendees: [string];
    private _image: string | any;

    static fromJSON(json): Activity {
        const act = new Activity(json.title, json.description, json.date, json.location, json.image, json.organisedBy);
        act._id = json._id;
        return act;
    }

    constructor(title: string, description: string, date?: Date, location?: string, image?: string | any, organisedBy?: string) {
        this._title = title;
        this._description = description;
        this._date = date;
        this._organisedBy = organisedBy;
        this._location = location;
        this._image = image;
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get date(): Date {
        return this._date;
    }

    get dateLong(): string {
        if (this._date) {
            const tempdate = new Date(this._date);
            const day = tempdate.toLocaleString('nl-BE', { weekday: 'long' });
            const dayNr = tempdate.getDate();
            const month = tempdate.toLocaleDateString('nl-BE', { month: 'long' });
            const year = tempdate.getFullYear();
            return day + ' ' + dayNr + ' ' + month + ' ' + year;
        }
        return '';
    }

    get dateShort(): string {
        if (this._date) {
            const tempdate = new Date(this._date);
            const day = tempdate.getDate();
            const month = tempdate.toLocaleString('nl-BE', { month: 'long' }).substr(0, 3);
            return day + ' ' + month;
        }
        return '';
    }

    get time(): string {
        if (this._date) {
            const tempdate = new Date(this._date);
            return tempdate.getHours() + ':' + tempdate.getMinutes();
        }
        return '';
    }

    set date(date: Date) {
        this._date = date;
    }

    get organisedBy(): string {
        return this._organisedBy;
    }

    set organisedBy(organisedBy) {
        this._organisedBy = organisedBy;
    }

    get location(): string {
        return this._location;
    }

    set location(location: string) {
        this._location = location;
    }

    get image(): string | any {
        return this._image;
    }

    set image(image: string | any) {
        this._image = image;
    }

    toJSON() {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            organisedBy: this._organisedBy,
            date: this._date,
            attendees: this._attendees,
            location: this._location,
            image: this._image
        };
    }
}
