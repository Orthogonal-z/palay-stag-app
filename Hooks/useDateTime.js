import moment from 'moment';

export const useDate = (date) => {
    const newDate = moment(date).format('DD/MM/YYYY');
    return newDate;
};

export const useTime = (time) => {
    var newTime = time?.slice(11, 18);
    var updateTime = moment(newTime, 'HH:mm:ss').format('hh:mm A');
    return updateTime;
};

export const useDateAndTime = (string) => {
    const newDate = moment(string).format('DD/MM/YYYY');
    var newTime = string?.slice(11, 18);
    var updateTime = moment(newTime, 'HH:mm:ss').format('hh:mm A');
    return `${newDate}-${updateTime}`;
};