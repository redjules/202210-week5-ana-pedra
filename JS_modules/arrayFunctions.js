export function arrayLength(nativeArray) {
    let length = 0;

    for (const element of nativeArray) {
        nativeArray[length] = element;
        length++;
    }
    return length;
}

export function arrayPush(nativeArray, extraElement) {
    nativeArray[arrayLength(nativeArray)] = extraElement;
    return arrayLength(nativeArray);
}

export function arrayPop(nativeArray) {
    const lastElement = nativeArray[arrayLength(nativeArray) - 1]; // 2

    for (let i = 0; i <= arrayLength(nativeArray) - 1; i++) {
        if (i === arrayLength(nativeArray) - 1) {
            delete nativeArray[i];
        }
    }
    return lastElement;
}

export function arrayUnshift(nativeArray, newElement) {
    for (let i = arrayLength(nativeArray) - 1; i >= 0; i--) {
        nativeArray[i + 1] = nativeArray[i];
    }

    nativeArray[0] = newElement;

    return arrayLength(nativeArray);
}

export function arrayShift(nativeArray) {
    const firstElement = nativeArray[0];
    for (let i = 0; i < arrayLength(nativeArray); i++) {
        nativeArray[i] = nativeArray[i + 1];
    }
    arrayPop(nativeArray);
    return firstElement;
}

export function arraySome(nativeArray, callback) {
    for (const element of nativeArray) {
        if (callback(element)) return true;
    }
    return false;
}

export function arrayEvery(nativeArray, callback) {
    let counter = 0;
    for (const element of nativeArray) {
        if (callback(element)) counter++;
        if (arrayLength(nativeArray) === counter) return true;
    }
    return false;
}

export function arrayFind(nativeArray, callback) {
    for (const element of nativeArray) {
        if (callback(element)) return element;
    }
}

export function arrayFilter(nativeArray, callback) {
    let filteredArray = [];
    for (const element of nativeArray) {
        if (callback(element)) arrayPush(filteredArray, element);
    }
    return filteredArray;
}

export function arrayMap(nativeArray, callback) {
    let filteredArray = [];
    for (const element of nativeArray) {
        let elementDoubled = callback(element);
        arrayPush(filteredArray, elementDoubled);
    }
    return filteredArray;
}

export function arrayFindIndex(nativeArray, callback) {
    let elementfound = arrayFind(nativeArray, callback);
    if (elementfound === undefined) return -1;
    for (let i = 0; i < arrayLength(nativeArray); i++) {
        if (nativeArray[i] === elementfound) return i;
    }
}
export function arrayIncludes(nativeArray, newElement) {
    for (const element of nativeArray) {
        if (element === newElement) return true;
    }
    return false;
}
export function arrayIndexOf(nativeArray, element, initialIndex) {
    for (let i = initialIndex; i < arrayLength(nativeArray); i++) {
        if (nativeArray[i] === element) return i;
    }
    return -1;
}
export function arrayJoin(nativeArray, join) {
    let response = "";
    for (let i = 0; i < arrayLength(nativeArray); i++) {
        const element = nativeArray[i];
        response += element;
        if (i !== arrayLength(nativeArray) - 1) response += join;
    }
    return response;
}
