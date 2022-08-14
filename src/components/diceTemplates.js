const diceTemplates = {
    1: [
        false, false, false,
        false, true, false,
        false, false, false
    ],
    2: [
        true, false, false,
        false, false, false,
        false, false, true
    ],
    3: [
        true, false, false,
        false, true, false,
        false, false, true
    ],
    4: [
        true, false, true,
        false, false, false,
        true, false, true
    ],
    5: [
        true, false, true,
        false, true, false,
        true, false, true
    ],
    6: [
        true, false, true,
        true, false, true,
        true, false, true
    ],
}

export default diceTemplates;