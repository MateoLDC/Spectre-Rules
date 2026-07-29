// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Spectre",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
                },
            ],
            sidebar: [
                {
                    label: "Règles du jeu",
                    items: [
                        {
                            label: "Déroulement d'une partie",
                            slug: "rules/start",
                        },
                    ],
                },
                {
                    label: "Fiches personnages",
                    items: [
                        {
                            label: "Les Héros",
                            slug: "characters/heros",
                        },
                        {
                            label: "Les Spectres",
                            slug: "characters/monsters",
                        },
                    ],
                },
                {
                    label: "Modes de jeu",
                    items: [
                        {
                            label: "hardcore",
                            slug: "mods/hardcore",
                        },
                        {
                            label: "Solo",
                            slug: "mods/solo",
                        },
                    ],
                },
            ],
        }),
    ],
});
