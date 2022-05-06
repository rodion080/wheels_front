export class LocalStorageUtil {
  public static getHeadingWithToken() {
    const token = localStorage.getItem('token');
    return `Bearer ${token}`;
  }
}
