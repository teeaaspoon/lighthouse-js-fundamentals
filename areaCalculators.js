function calculateRectangleArea(length, width) {
    if (length < 0 || width < 0) {
        return undefined
    } else if (!length.NaN && !width.NaN) {
        return length * width
    } else {
        return "Not a number"
    }
}

function calculateTriangleArea(base, height) {
    if (base < 0 || height < 0) {
        return undefined
    } else if (!base.NaN && !height.NaN) {
        return base * height / 2
    } else {
        return "Not a number"
    }
}

function calculateCircleArea(radius) {
    if (radius < 0) {
        return undefined
    } else if (!radius.NaN) {
        return Math.PI * radius * radius
    } else {
        return "Not a number"
    }
}
