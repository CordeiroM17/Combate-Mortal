export class Personaje {
    private _vida: number
    private _arma: string
    private _escudo: number

    protected setVida(vida: number): void {
        this._vida = vida
    }

    getVida(): number {
        return this._vida
    }

    protected setEscudo(escudo: number): void {
        this._escudo = escudo
    }

    getEscudo(): number {
        return this._escudo
    }

    protected setArma(arma: string): void {
        this._arma = arma
    }

    getArma(): string {
        return this._arma
    }
}