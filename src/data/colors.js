const COLORS = [
    'green',
    'red',
    'orange',
    'yellow',
    'blue',
    'pink',
    'purple',
    'white'
];

export const getRandColor = () => {
    const index = Math.floor((Math.random() * 100 * COLORS.length) % COLORS.length);
    return COLORS[index];
}