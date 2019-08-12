export class IdGeneratorProvider {
  private static currentId = 1;

  public static Generate(): number {
    return this.currentId++;
  }
}