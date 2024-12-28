import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";

export default async function Home() {
  const results = await db.select().from(Invoices).execute();
  return (
    <main className="max-w-5xl mx-auto flex flex-col justify-center h-full text-center gap-6 my-12">
      <div className=" flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant="ghost" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow className="text-left font-semibold" key={result.id}>
              <TableCell>
                <Link className="p-2 block" href={`/invoices/${result.id}`}>
                  {new Date(result.createTs).toLocaleDateString()}
                </Link>
              </TableCell>

              <TableCell>
                <Link className="p-2 block" href={`/invoices/${result.id}`}>
                  Leslie Kavanagh
                </Link>
              </TableCell>
              <TableCell>
                <Link
                  href={`/invoices/${result.id}`}
                  className="font-extralight p-2 block"
                >
                  l.marie1598@gmail.com
                </Link>
              </TableCell>
              <TableCell>
                <Link className="p-2 block" href={`/invoices/${result.id}`}>
                  <Badge
                    className={cn(
                      "rounded-full capitalize",
                      result.status === "open" && "bg-blue-600",
                      result.status === "paid" && "bg-green-600",
                      result.status === "void" && "bg-gray-600",
                      result.status === "uncollectible" && "bg-red-600"
                    )}
                  >
                    {result.status}
                  </Badge>
                </Link>
              </TableCell>
              <TableCell className="text-right">
                <Link className="p-3 block" href={`/invoices/${result.id}`}>
                  € {""}
                  {(result.value / 100).toFixed(2)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="text-right" colSpan={45}>
              <span>Total</span>
              {""}
              <span>$2,500.00</span>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
