// Resultado 5 ⭐
function treeHeight(tree: { value: string; left: any; right: any } | null): number {
    if (!tree) return 0;

    const left: number = treeHeight(tree.left);
    const right: number = treeHeight(tree.right);

    return Math.max(left, right) + 1;
}
    