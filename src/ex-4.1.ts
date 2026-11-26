type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if(user.age === undefined){
    return false
  }
  return user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// สาเหตุของ Error เริ่มจาก บรรทัดที่ 4 ครับ เนื่องจาก age? สามารถ มองได้ว่า เป็น 
// number | undefined เมือ Excute ค่า ที่ไม่ใช่ตัวเลขจะมองเป็น  undefined ทันที่ จึงเกิด error
