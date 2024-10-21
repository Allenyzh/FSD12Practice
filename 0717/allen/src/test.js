
function printElement(element, indent = 0) {
    const indentation = ' '.repeat(indent);
    if (typeof element === 'string') {
      console.log(`${indentation}${element}`);
    } else if (typeof element === 'object' && element !== null) {
      console.log(`${indentation}{ tag: '${element.tag}', children: [`);
      if (element.children) {
        element.children.forEach(child => printElement(child, indent + 2));
      }
      console.log(`${indentation}] }`);
    }
  }
  
  // 假设 obj 是你的数据结构根对象
  obj.forEach(element => printElement(element));
  