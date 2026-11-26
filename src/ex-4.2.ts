function processData(data: unknown): string {
  if(typeof data==="string"){
    return data.toUpperCase();
  }
  return "Not a string"
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ตอน compile ตัวแปร data  มี type  unknown ไม่ใช่ number จึงเกิด Error เพราะ ไม่สามารถเรียกใช้ toUpperCase ได้
