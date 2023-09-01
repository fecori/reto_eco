export const getUUID = () => {
    let uuid = localStorage.getItem("uuid");
    if (!uuid) {
        uuid = generateUUID();
        localStorage.setItem("uuid", uuid)
    }
    return uuid;
};

export const generateUUID = () => {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};
