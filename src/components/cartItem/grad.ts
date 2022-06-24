export enum GRADIENT {
  green = 'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  red = 'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  blue = 'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  white = 'linear-gradient(270deg, #fff 0.15%, #fff 100%)',
  brown = 'linear-gradient(270deg, brown 0.15%, brown 100%)',
  yellow = 'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  purple = 'linear-gradient(270deg, purple 0.15%, purple 100%)',
  pink = 'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
  gray = 'linear-gradient(270deg, gray 0.15%, gray 100%)',
  black = 'linear-gradient(270deg, #000 0.15%, #000 100%)',
}

export function gradConverter(str: string) {
  let result = ''

  switch (str) {
    case 'green':
      result = GRADIENT.green;
      break;
    case 'red':
      result = GRADIENT.red;
      break;
    case 'blue':
      result = GRADIENT.blue;
      break;
    case 'white':
      result = GRADIENT.white;
      break;
    case 'brown':
      result = GRADIENT.brown;
      break;
    case 'yellow':
      result = GRADIENT.yellow;
      break;
    case 'purple':
      result = GRADIENT.purple;
      break;
    case 'pink':
      result = GRADIENT.pink;
      break;
    case 'gray':
      result = GRADIENT.gray;
      break;
    case 'black':
      result = GRADIENT.black;
      break;
    default:
      result = 'inherit';
      break;
  }
  return result;
}