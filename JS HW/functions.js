export const counterSum = () => {
    let sum = 0;

    return (num) => {
        sum += num;
        return sum;
    }
}

export const arrayUpdater = () => {
    let arr = [];

    return (item) => {
        if (item == undefined) {
            arr = [];
        }
        else {
            arr.push(item);
        }

        return arr;
    }
}
