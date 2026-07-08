---
theme: default
colorSchema: both
css: unocss
highlighter: shiki
transition: fade-out
mdc: true
glow: full
glowSeed: 7
title: "Titre du talk"
info: |
  ## Sous-titre / description courte
drawings:
  persist: false
---

<div flex="~ col gap-4 items-center justify-center" h-full>
  <div font-serif text-6xl>Titre du talk</div>
  <div op60 text-2xl>Sous-titre / accroche</div>
</div>

<div class="abs-br m-10 text-sm op50">
  Ton nom — Conférence, Date
</div>

<!--
Notes du présentateur : visibles uniquement en mode presenter (/presenter/).
-->

---
layout: center
glow: false
---

<Toc minDepth="1" maxDepth="1" />

---
layout: section
glowSeed: 12
---

# Section 1
Sous-titre de section

---
class: text-xl
glow: false
---

<div font-serif text-3xl mb6>Titre de slide normale</div>

Texte de contenu. Garder une idée par slide, beaucoup d'espace vide.

```php {1-2|4-6|all}
// Bloc de code avec reveal progressif par étape
function example(): void {
    echo "step 1";

    // étape suivante mise en avant au clic suivant
    echo "step 2";
}
```

---
layout: none
class: h-full
glow: right
---

<div h-full flex="~ col justify-center" px20>

<div font-serif text-4xl mb10>Grille de cartes colorées</div>

<div grid="~ cols-3 gap-6">
  <div v-click p5 rounded-xl bg-red:10 border="~ red:30">
    <div i-ph-warning-duotone text-red text-3xl mb3 />
    <div text-xl mb2>Carte 1</div>
    <div op60 text-sm>Description courte.</div>
  </div>
  <div v-click p5 rounded-xl bg-amber:10 border="~ amber:30">
    <div i-ph-test-tube-duotone text-amber text-3xl mb3 />
    <div text-xl mb2>Carte 2</div>
    <div op60 text-sm>Description courte.</div>
  </div>
  <div v-click p5 rounded-xl bg-purple:10 border="~ purple:30">
    <div i-ph-lock-key-duotone text-purple text-3xl mb3 />
    <div text-xl mb2>Carte 3</div>
    <div op60 text-sm>Description courte.</div>
  </div>
</div>

</div>

<!--
Icônes via Iconify (unplugin-icons) : i-<collection>-<nom>, ex. i-ph-*, i-logos-*, i-carbon-*, i-material-symbols-*
-->

---
layout: statement
glow: center
glowSeed: 3
---

<div font-serif text-5xl>Une phrase-clé<br>qui marque les esprits</div>

---
layout: two-cols
layoutClass: gap-10
glow: false
---

<div font-serif text-2xl mb6>Colonne gauche</div>

<v-clicks>

- Point 1
- Point 2
- Point 3

</v-clicks>

::right::

<div font-serif text-2xl mb6>Colonne droite</div>

<v-clicks>

- Point A
- Point B
- Point C

</v-clicks>

---
layout: center
class: text-center
glow: center
glowSeed: 2
---

<div font-serif text-3xl mb10>Conclusion</div>

<div grid="~ cols-3 gap-6" text-left>
  <div v-click p5 rounded-xl bg-blue:10>
    <div text-blue mb2>Point clé 1</div>
    <div op70 text-sm>Détail court</div>
  </div>
  <div v-click p5 rounded-xl bg-purple:10>
    <div text-purple mb2>Point clé 2</div>
    <div op70 text-sm>Détail court</div>
  </div>
  <div v-click p5 rounded-xl bg-lime:10>
    <div text-lime mb2>Point clé 3</div>
    <div op70 text-sm>Détail court</div>
  </div>
</div>

---
layout: intro
class: text-center
glow: center
glowSeed: 1
---

<div font-serif text-5xl mb6>Merci !</div>

<div op60>Lien vers l'article / la conférence</div>
