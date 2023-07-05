class TypesHelper {
  cloneValue(value) {
    return JSON.parse(JSON.stringify(value));
  }

  cloneValue2(value) {
    return Array.isArray(value) ? [...value] : { ...value };
  }

  cloneValue3(value) {
    return Array.isArray(value)
      ? value.map((x) => x)
      : Object.assign({}, value);
  }

  cloneValue4(value) {
    let newObj = {};
    let isArray = Array.isArray(value);

    if (isArray) {
      return value.slice();
    }
    for (const key in value) {
      newObj[key] = value[key];
    }
    return newObj;
  }

  /* if array - use concat
    if obj - use Object.entries */

  cloneValue5(value) {
    let isArray = Array.isArray(value);
    let newObj = {};

    if (isArray) {
      let newArr = [];

      return newArr.concat(value);
    }

    for ([key, value] of Object.entries(value)) {
      newObj[key] = value;
    }
    return newObj;
  }

  cloneValue6(value) {
    let isArray = Array.isArray(value);

    if (isArray) {
      return [...value];
    }

    return Object.entries(value).reduce((acc, x) => {
      acc[x[0]] = x[1];
      return acc;
    }, {});
  }

  isPrimitive(value) {
    return (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean" ||
      value === null ||
      value === undefined ||
      typeof value === "symbol"
    );
  }

  isReference(value) {
    return (
      (typeof value == "object" && value !== null) ||
      typeof value === "function"
    );
  }

  areValuesEqual(v1, v2) {
    let v1NullOrUndefined = v1 === undefined || v1 === null;
    let v2NullOrUndefined = v2 === undefined || v2 === null;

    if (Number.isNaN(v1) || Number.isNaN(v2)) {
      return Number.isNaN(v1) === Number.isNaN(v2) || false;
    }

    if(v1NullOrUndefined && v2NullOrUndefined) {
        return v1 === v2;
    }
    return v1 == v2;
  }
}

module.exports = TypesHelper;
