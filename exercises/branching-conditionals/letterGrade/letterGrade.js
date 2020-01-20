/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
 if (percentGrade<60){
   return 'F';
 } else if (percentGrade>60 & percentGrade<62) {
   return 'D-';
 } else if (percentGrade>62 & percentGrade<66){
   return 'D';
 } else if (percentGrade>66 & percentGrade<69) {
   return 'D+';
  } else if (percentGrade>69 & percentGrade<72) {
    return 'C-';
  } else if (percentGrade>72 & percentGrade<76){
    return 'C';
  } else if (percentGrade>76 & percentGrade<79) {
    return 'C+';
  } else if (percentGrade>79 & percentGrade<82) {
    return 'B-';
  } else if (percentGrade>82 & percentGrade<86){
    return 'B';
  } else if (percentGrade>86 & percentGrade<89) {
    return 'B+';
  } else if (percentGrade>89 & percentGrade<92) {
    return 'A-';
  } else if (percentGrade>92 & percentGrade<96){
    return 'A';
  } else if (percentGrade>96 & percentGrade<100) {
    return 'A+';
  } }
if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
console.log(letterGrade(50)==='F');
console.log(letterGrade(65)==='D');
console.log(letterGrade(99)==='A+');
console.log(letterGrade(81)==='B-');
console.log(letterGrade(95)==='A');
console.log(letterGrade(70)==='C-');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;

