import { PrismaClient } from "@prisma/client";

//Initialize the prisma client
const prisma = new PrismaClient();

async function main() {
 //Create a category
 const  category1 = await prisma.category.upsert({
    where: { id: 2 },
    update:{},
    create:{
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "Land, Houses, Machinery, etc."
    },
 });

    const  category2 = await prisma.category.upsert({
        where: { id: 3 },
        update:{},
        create:{
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Computers."
        },
    });

    const  category3 = await prisma.category.upsert({
        where: { id: 4 },
        update:{},
        create:{
            image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            description: "Services, repairs, etc."
        },
    });

    console.log({ category1, category2, category3 });
}

  // execute the main function
main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  // close Prisma Client at the end
  await prisma.$disconnect();

});