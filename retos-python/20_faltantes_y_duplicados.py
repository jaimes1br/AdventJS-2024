# Resultado 5 ⭐
def fix_gift_list(received, expected):
    missing = {}
    extra = {}
    obj_received = {}
    obj_expected = {}

    for gift in received:
        if gift in obj_received:
            obj_received[gift] += 1
        else:
            obj_received[gift] = 1

    if not expected:
        for gift, count in obj_received.items():
            extra[gift] = count
        return {"missing": missing, "extra": extra}

    for gift in expected:
        if gift in obj_expected:
            obj_expected[gift] += 1
        else:
            obj_expected[gift] = 1

    for gift, count_expected in obj_expected.items():
        count_received = obj_received.get(gift, 0)

        if count_received == 0:
            missing[gift] = count_expected
        elif count_expected > count_received:
            missing[gift] = count_expected - count_received
        elif count_expected < count_received:
            extra[gift] = count_received - count_expected

    for gift, count_received in obj_received.items():
        if gift not in obj_expected:
            extra[gift] = count_received

    return {"missing": missing, "extra": extra}