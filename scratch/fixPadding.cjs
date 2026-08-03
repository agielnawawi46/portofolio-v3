const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../src/components');

const filesToProcess = {
  'HeroSection.tsx': {
    target: '<section',
    inner: 'w-full max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-8 md:px-12',
    innerReplace: 'w-full max-w-5xl xl:max-w-7xl mx-auto',
    sectionReplace: '<section\n      className="px-6 sm:px-10 md:px-12"'
  },
  'IdentitySection.tsx': {
    target: '<section',
    inner: 'w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 md:px-12',
    innerReplace: 'w-full max-w-6xl xl:max-w-7xl mx-auto',
    sectionReplace: '<section\n      className="px-6 sm:px-10 md:px-12"'
  },
  'ContactSection.tsx': {
    target: 'className="relative w-full flex flex-col justify-center items-center py-20 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden border-b-2 border-black"',
    inner: 'w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12',
    innerReplace: 'w-full max-w-6xl mx-auto',
    sectionReplace: 'className="relative w-full flex flex-col justify-center items-center py-20 md:py-28 px-6 sm:px-10 md:px-12 overflow-hidden border-b-2 border-black"'
  },
  'Navbar.tsx': {
    target: '<header',
    inner: 'w-full px-4 sm:px-8 md:px-12',
    innerReplace: 'w-full px-6 sm:px-10 md:px-12',
    sectionReplace: '<header'
  }
};

for (const [file, rules] of Object.entries(filesToProcess)) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace inner
  if (content.includes(rules.inner)) {
    content = content.replace(rules.inner, rules.innerReplace);
  }
  
  // For Hero and Identity, we need to inject the className into the <section>
  if (file === 'HeroSection.tsx' || file === 'IdentitySection.tsx') {
    if (!content.includes('className="px-6 sm:px-10 md:px-12"')) {
      content = content.replace(rules.target, rules.sectionReplace);
    }
  } else if (file === 'ContactSection.tsx') {
    content = content.replace(rules.target, rules.sectionReplace);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + file);
}
