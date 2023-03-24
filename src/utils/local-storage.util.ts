import { NOTES_LOCAL_STORAGE_KEY } from './constants.util';

function putPersistData(data: any): any {
  return localStorage.setItem(NOTES_LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function getPersistData(): any {
  const data = JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_KEY) as string);

  return data ? data : [];
}

function wipeAllPersistData(key: string) {
  return localStorage.removeItem(NOTES_LOCAL_STORAGE_KEY);
}

const PersistDataMethods = { putPersistData, getPersistData, wipeAllPersistData };

export default PersistDataMethods;
