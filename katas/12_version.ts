/**
 *  Implement a function that checks if a new version is available
 *
 *  The function will take two values as inputs:
 *  a string representing the current version, and a VersionData object containing data about the latest published update
 *
 *  If the published version is lower or equal to the current version, the response should be Unavailable
 *  Else, the response should return either Mandatory or Available, depending on the mandatory property in the VersionData object
 *
 *
 *
 *
 */

import { VersionData, UpdateResponse } from '@types';

export const checkVersion = (currentValue: string, publishedValue: VersionData): UpdateResponse => {
    return 'Mandatory';
};
