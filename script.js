const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOdds(nums) {
    return nums.filter(num => num % 2 !== 0);
}
console.log(getOdds(nums));
