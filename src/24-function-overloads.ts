type Combinable3 = number | string;

function addition(a: string, b: string): string;
function addition(a: number, b: number): number;
function addition(a: string, b: number): string;
function addition(a: number, b: string): string;

function addition(a: Combinable3, b: Combinable3) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addition('Amir', ' Mustafa');
result.split(' ');
