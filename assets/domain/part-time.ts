function calculateTotalWage(baseHourlyWage, totalDaysWorked, hoursPerDay, options) {
    const totalHoursWorked = totalDaysWorked * hoursPerDay;

    let totalWage = baseHourlyWage * totalHoursWorked;

    if (options) {
        if (options.weekendBonus) {
            const weekendHours = totalHoursWorked / options.weekendBonusDenominator;
            totalWage += baseHourlyWage * 8 * weekendHours;
        }

        if (options.nightShiftBonus) {
            totalWage += (baseHourlyWage * options.nightShiftBonus) * totalHoursWorked;
        }

        if (options.overtimeRate && totalHoursWorked > options.overtimeThreshold) {
            const overtimeHours = totalHoursWorked - options.overtimeThreshold;
            totalWage += (baseHourlyWage * options.overtimeRate) * overtimeHours;
        }

        if (options.trainee && options.traineeDeduction) {
            // 수습인 경우 급여에서 10% 차감
            totalWage -= (totalWage * options.traineeDeduction);
        }
    }

    return totalWage;
}

const baseHourlyWage = 10000; // 시급 (원)
const totalDaysWorked = 31; // 총 일수
const hoursPerDay = 5; // 하루에 일한 시간 (시간)

const options = {
    weekendBonus: false, // 주휴수당 없음
    nightShiftBonus: 0, // 야간수당 없음
    overtimeThreshold: 40, // 연장근로 기준 (시간)
    overtimeRate: 1.5, // 연장근로수당 1.5배
    trainee: true, // 수습 여부
    traineeDeduction: 0.1, // 수습 급여 차감율 10%
};

const totalWage = calculateTotalWage(baseHourlyWage, totalDaysWorked, hoursPerDay, options);
console.log("총 급여: " + totalWage + "원");