# FridgeMate

Projet Android du cours INFO507, utilisant Kotlin, Jetpack Compose et Room.

Sources d'origine : [IorYohanna/INFO507](https://github.com/IorYohanna/INFO507),
commit [`b6cf897`](https://github.com/IorYohanna/INFO507/commit/b6cf89712ad88ae66ee2dc54643ca3086c81a462).

## Corrections incluses

- Ajout de `kotlinx.serialization.json`, nécessaire aux DTO annotés avec `@Serializable`.
- Initialisation du singleton Room avec une seconde vérification dans le bloc synchronisé et utilisation du contexte de l'application.
- Accès au DAO nommé `produitDao()` et modification du holder limitée à son initialisation.
- Script `gradlew` exécutable sous Linux et macOS.

## Ouvrir le projet

Dans Android Studio, choisir **Open** puis sélectionner ce dossier `FridgeMate`.
Le projet possède ses propres fichiers `settings.gradle.kts` et `build.gradle.kts`.

La configuration du projet utilise le SDK Android 37, les Build Tools 36.0.0
et un JDK 21 pour le daemon Gradle. Installer les composants nécessaires avec
le SDK Manager et laisser Android Studio synchroniser Gradle.

Depuis ce dossier, sous Linux ou macOS :

```sh
./gradlew :app:assembleDebug
./gradlew :app:testDebugUnitTest :app:lintDebug
```

Sous Windows, utiliser `gradlew.bat` à la place de `./gradlew`.

## Vérifications

L'application du correctif, l'intégrité du wrapper et des fichiers copiés,
ainsi que les fichiers XML et le catalogue de versions TOML ont été vérifiés.
La compilation Android complète et les tests Gradle restent à valider :
la tentative précédente a été interrompue pendant le téléchargement des dépendances.
