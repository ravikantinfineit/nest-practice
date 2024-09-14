import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Countries with real data
  const countries = await prisma.$transaction([
    prisma.country_mas.create({
      data: { name: 'India', dial_code: '+91' },
    }),
    prisma.country_mas.create({
      data: { name: 'South Africa', dial_code: '+27' },
    }),
    prisma.country_mas.create({
      data: { name: 'Namibia', dial_code: '+264' },
    }),
    prisma.country_mas.create({
      data: { name: 'Botswana', dial_code: '+267' },
    }),
    prisma.country_mas.create({
      data: { name: 'United States', dial_code: '+1' },
    }),
  ]);

  // Data for states and cities of each country
  const countryData = {
    'India': {
      states: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Gujarat'],
      cities: {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Noida'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar'],
      }
    },
    'South Africa': {
      states: ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Limpopo'],
      cities: {
        'Gauteng': ['Johannesburg', 'Pretoria', 'Vanderbijlpark', 'Krugersdorp', 'Benoni'],
        'Western Cape': ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Worcester'],
        'KwaZulu-Natal': ['Durban', 'Pietermaritzburg', 'Richards Bay', 'Newcastle', 'Empangeni'],
        'Eastern Cape': ['Port Elizabeth', 'East London', 'Mthatha', 'Bhisho', 'King William’s Town'],
        'Limpopo': ['Polokwane', 'Tzaneen', 'Thohoyandou', 'Giyani', 'Lebowakgomo'],
      }
    },
    'Namibia': {
      states: ['Khomas', 'Erongo', 'Oshana', 'Otjozondjupa', 'Omaheke'],
      cities: {
        'Khomas': ['Windhoek', 'Rehoboth'],
        'Erongo': ['Swakopmund', 'Walvis Bay'],
        'Oshana': ['Oshakati', 'Ondangwa'],
        'Otjozondjupa': ['Otjiwarongo', 'Okahandja'],
        'Omaheke': ['Gobabis', 'Leonardville'],
      }
    },
    'Botswana': {
      states: ['South-East', 'Central', 'North-East', 'Kweneng', 'Kgatleng'],
      cities: {
        'South-East': ['Gaborone', 'Ramotswa'],
        'Central': ['Serowe', 'Palapye'],
        'North-East': ['Francistown', 'Masunga'],
        'Kweneng': ['Molepolole', 'Thamaga'],
        'Kgatleng': ['Mochudi', 'Oodi'],
      }
    },
    'United States': {
      states: ['California', 'Texas', 'New York', 'Florida', 'Illinois'],
      cities: {
        'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'],
        'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'],
        'New York': ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'],
        'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee'],
        'Illinois': ['Chicago', 'Springfield', 'Aurora', 'Naperville', 'Rockford'],
      }
    },
  };

  // Create States and Cities
  for (const country of countries) {
    const countryInfo = countryData[country.name];
    if (countryInfo) {
      for (const stateName of countryInfo.states) {
        const state = await prisma.state_mas.create({
          data: {
            name: stateName,
            id_country: country.id_country,
          },
        });

        for (const cityName of countryInfo.cities[stateName]) {
          await prisma.city_mas.create({
            data: {
              name: cityName,
              id_state: state.id_state,
              id_country: country.id_country,
            },
          });
        }
      }
    }

    // Create 3 banks per country with realistic names
    const bankNames = {
      'India': ['State Bank of India', 'HDFC Bank', 'ICICI Bank'],
      'South Africa': ['Standard Bank', 'Nedbank', 'First National Bank'],
      'Namibia': ['Bank Windhoek', 'Standard Bank Namibia', 'Nedbank Namibia'],
      'Botswana': ['First National Bank Botswana', 'Standard Chartered Botswana', 'Absa Bank Botswana'],
      'United States': ['Chase Bank', 'Bank of America', 'Wells Fargo'],
    };

    for (const bankName of bankNames[country.name]) {
      await prisma.banks_mas.create({
        data: {
          name: bankName,
          short_name: bankName.substring(0, 5),
          id_country: country.id_country,
        },
      });
    }
  }

  // Seed Document Groups and Documents
  const documentGroups = [
    { name: 'Identity Documents', documents: ['Passport', 'Driver License', 'National ID Card', 'Birth Certificate', 'Social Security Card'] },
    { name: 'Financial Documents', documents: ['Bank Statement', 'Credit Card Statement', 'Tax Return', 'Loan Agreement', 'Pay Stub'] },
    { name: 'Medical Documents', documents: ['Medical History', 'Vaccination Record', 'Insurance Card', 'Test Results', 'Prescription'] },
    { name: 'Employment Documents', documents: ['Employment Contract', 'Resume', 'Reference Letter', 'Performance Review', 'Job Application'] },
    { name: 'Legal Documents', documents: ['Will', 'Power of Attorney', 'Marriage Certificate', 'Divorce Decree', 'Lease Agreement'] },
  ];

  for (const group of documentGroups) {
    const docGroup = await prisma.document_groups.create({
      data: { name: group.name },
    });

    for (const docName of group.documents) {
      await prisma.documents.create({
        data: {
          name: docName,
          id_document_group: docGroup.id_document_group,
        },
      });
    }
  }

  // Seed Address Types
  const addressTypes = ['Home', 'Office', 'Billing', 'Shipping', 'Temporary'];
  for (const addressType of addressTypes) {
    await prisma.address_types.create({
      data: { address_type: addressType },
    });
  }

  // Seed Contact Types
  const contactTypes = ['Phone', 'Email', 'Fax', 'Social Media', 'Postal Mail'];
  for (const contactType of contactTypes) {
    await prisma.contact_types.create({
      data: { contact_type: contactType },
    });
  }

  console.log('Data seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
