export type VersionData = {
    activeVersion: boolean;
    versionCode: string;
    mandatory: boolean;
    published: Date;
};

export type UpdateResponse = 'Mandatory' | 'Available' | 'Unavailable';
