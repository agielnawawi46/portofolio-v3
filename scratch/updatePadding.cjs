const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // For HeroSection, IdentitySection, AboutSkillSection, ProjectsSection, Navbar
  if (content.includes('px-6 md:px-10')) {
    content = content.replace(/px-6 md:px-10/g, 'px-8 md:px-12');
    changed = true;
  }

  // For ExperienceSection, ContactSection
  if (content.includes('px-6 overflow-hidden')) {
    content = content.replace(/px-6 overflow-hidden/g, 'px-8 md:px-12 overflow-hidden');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
