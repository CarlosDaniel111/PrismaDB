const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const carlos = await prisma.explorer.upsert({
        where: { name: 'Carlos Daniel' },
        update: {},
        create: {
          name: 'Carlos Daniel',
                  username: 'CarlosDaniel111',
                  mission: 'Node'
        },
      });
  
      console.log('Create 4 explorers');



      const woopaa = await prisma.explorers_2.upsert({
        where: { name: 'Woopa' },
        update: {},
        create: {
          name: 'Woopa',
            lang: 'espanol',
            missionCommander: 'Carlo',
            enrollments: 5,
            hasCertification: true
        },
      });
  
      const woopaa1 = await prisma.explorers_2.upsert({
        where: { name: 'Woopa1' },
        update: {},
        create: {
          name: 'Woopa1',
            lang: 'espanol',
            missionCommander: 'Carlo',
            enrollments: 3,
            hasCertification: true
        },
      });
  
      const woopaa2 = await prisma.explorers_2.upsert({
        where: { name: 'Woopa2' },
        update: {},
        create: {
          name: 'Woopa',
            lang: 'espanol',
            missionCommander: 'Carlo',
            enrollments: 1,
            hasCertification: false
        },
      });
  
      const carloss = await prisma.explorers_2.upsert({
        where: { name: 'Carlos' },
        update: {},
        create: {
          name: 'Carlos',
            lang: 'espanol',
            missionCommander: 'Carlo',
            enrollments: 10,
            hasCertification: true
        },
      });
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();