import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";

describe("Soldado", () => {
    test("Debe crear un soldado", () => {
        const soldado = new Soldado();

        expect(soldado.getVida()).toBe(1);
        expect(soldado.getEscudo()).toBe(1);
        expect(soldado.getArma()).toBe("Pistola");
    });

})