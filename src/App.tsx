/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KJiKXRxsu2V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import Link from "next/link"

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="ejemplo@dominio.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button className="w-full">Iniciar sesión</Button>
        </CardFooter>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          ¿Aún no tienes una cuenta?{" "}
          <Link href="#" className="font-medium underline underline-offset-4" prefetch={false}>
            Regístrate
          </Link>
        </div>
      </Card>
    </div>
  )
}