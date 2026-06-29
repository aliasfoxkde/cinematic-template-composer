// src/data/templates.ts
// 25 cinematic prompt templates — one base template with 8 placeholder slots each.

export interface Template {
  title: string;
  /** Prompt template with {placeholder} slots */
  template: string;
  /** Relative paths to this template's gallery images (from public/) */
  imgs: string[];
}

export const TEMPLATES: Template[] = [
  {
    title: '1920s Flapper',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/1920s_flapper.webp',
      'cinematic-stills/16-9/1920s_flapper_2.webp',
      'cinematic-stills/16-9/1920s_flapper_3.webp',
      'cinematic-stills/16-9/1920s_flapper_4.webp',
      'cinematic-stills/16-9/1920s_flapper_5.webp',
      'cinematic-stills/16-9/1920s_flapper_6.webp',
    ],
  },
  {
    title: '90s Smalltown',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/90s_smalltown.webp',
      'cinematic-stills/16-9/90s_smalltown_2.webp',
      'cinematic-stills/16-9/90s_smalltown_3.webp',
      'cinematic-stills/16-9/90s_smalltown_4.webp',
      'cinematic-stills/16-9/90s_smalltown_5.webp',
      'cinematic-stills/16-9/90s_smalltown_6.webp',
    ],
  },
  {
    title: 'Cyberpunk Hacker',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/cyberpunk_hacker.webp',
      'cinematic-stills/16-9/cyberpunk_hacker_2.webp',
      'cinematic-stills/16-9/cyberpunk_hacker_3.webp',
      'cinematic-stills/16-9/cyberpunk_hacker_4.webp',
      'cinematic-stills/16-9/cyberpunk_hacker_5.webp',
      'cinematic-stills/16-9/cyberpunk_hacker_6.webp',
    ],
  },
  {
    title: 'Desert Nomad',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/desert_nomad.webp',
      'cinematic-stills/16-9/desert_nomad_2.webp',
      'cinematic-stills/16-9/desert_nomad_3.webp',
      'cinematic-stills/16-9/desert_nomad_4.webp',
      'cinematic-stills/16-9/desert_nomad_5.webp',
      'cinematic-stills/16-9/desert_nomad_6.webp',
    ],
  },
  {
    title: 'Fantasy Ranger',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/fantasy_ranger.webp',
      'cinematic-stills/16-9/fantasy_ranger_2.webp',
      'cinematic-stills/16-9/fantasy_ranger_3.webp',
      'cinematic-stills/16-9/fantasy_ranger_4.webp',
      'cinematic-stills/16-9/fantasy_ranger_5.webp',
      'cinematic-stills/16-9/fantasy_ranger_6.webp',
    ],
  },
  {
    title: 'Fantasy Sorceress',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/fantasy_sorceress.webp',
      'cinematic-stills/16-9/fantasy_sorceress_2.webp',
      'cinematic-stills/16-9/fantasy_sorceress_3.webp',
      'cinematic-stills/16-9/fantasy_sorceress_4.webp',
      'cinematic-stills/16-9/fantasy_sorceress_5.webp',
      'cinematic-stills/16-9/fantasy_sorceress_6.webp',
    ],
  },
  {
    title: 'Gothic Moor',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/gothic_moor.webp',
      'cinematic-stills/16-9/gothic_moor_2.webp',
      'cinematic-stills/16-9/gothic_moor_3.webp',
      'cinematic-stills/16-9/gothic_moor_4.webp',
      'cinematic-stills/16-9/gothic_moor_5.webp',
      'cinematic-stills/16-9/gothic_moor_6.webp',
    ],
  },
  {
    title: 'Highland Romance',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/highland_romance.webp',
      'cinematic-stills/16-9/highland_romance_2.webp',
      'cinematic-stills/16-9/highland_romance_3.webp',
      'cinematic-stills/16-9/highland_romance_4.webp',
      'cinematic-stills/16-9/highland_romance_5.webp',
      'cinematic-stills/16-9/highland_romance_6.webp',
    ],
  },
  {
    title: 'Jungle Explorer',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/jungle_explorer.webp',
      'cinematic-stills/16-9/jungle_explorer_2.webp',
      'cinematic-stills/16-9/jungle_explorer_3.webp',
      'cinematic-stills/16-9/jungle_explorer_4.webp',
      'cinematic-stills/16-9/jungle_explorer_5.webp',
      'cinematic-stills/16-9/jungle_explorer_6.webp',
    ],
  },
  {
    title: 'Medieval Knight',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/medieval_knight.webp',
      'cinematic-stills/16-9/medieval_knight_2.webp',
      'cinematic-stills/16-9/medieval_knight_3.webp',
      'cinematic-stills/16-9/medieval_knight_4.webp',
      'cinematic-stills/16-9/medieval_knight_5.webp',
      'cinematic-stills/16-9/medieval_knight_6.webp',
    ],
  },
  {
    title: 'Medieval Queen',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/medieval_queen.webp',
      'cinematic-stills/16-9/medieval_queen_2.webp',
      'cinematic-stills/16-9/medieval_queen_3.webp',
      'cinematic-stills/16-9/medieval_queen_4.webp',
      'cinematic-stills/16-9/medieval_queen_5.webp',
      'cinematic-stills/16-9/medieval_queen_6.webp',
    ],
  },
  {
    title: 'Noir Detective',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/noir_detective.webp',
      'cinematic-stills/16-9/noir_detective_2.webp',
      'cinematic-stills/16-9/noir_detective_3.webp',
      'cinematic-stills/16-9/noir_detective_4.webp',
      'cinematic-stills/16-9/noir_detective_5.webp',
      'cinematic-stills/16-9/noir_detective_6.webp',
    ],
  },
  {
    title: 'Noir Femmefatale',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/noir_femmefatale.webp',
      'cinematic-stills/16-9/noir_femmefatale_2.webp',
      'cinematic-stills/16-9/noir_femmefatale_3.webp',
      'cinematic-stills/16-9/noir_femmefatale_4.webp',
      'cinematic-stills/16-9/noir_femmefatale_5.webp',
      'cinematic-stills/16-9/noir_femmefatale_6.webp',
    ],
  },
  {
    title: 'Pirate Captain',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/pirate_captain.webp',
      'cinematic-stills/16-9/pirate_captain_2.webp',
      'cinematic-stills/16-9/pirate_captain_3.webp',
      'cinematic-stills/16-9/pirate_captain_4.webp',
      'cinematic-stills/16-9/pirate_captain_5.webp',
      'cinematic-stills/16-9/pirate_captain_6.webp',
    ],
  },
  {
    title: 'Postapoc Survivor',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/postapoc_survivor.webp',
      'cinematic-stills/16-9/postapoc_survivor_2.webp',
      'cinematic-stills/16-9/postapoc_survivor_3.webp',
      'cinematic-stills/16-9/postapoc_survivor_4.webp',
      'cinematic-stills/16-9/postapoc_survivor_5.webp',
      'cinematic-stills/16-9/postapoc_survivor_6.webp',
    ],
  },
  {
    title: 'Regency Ball',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/regency_ball.webp',
      'cinematic-stills/16-9/regency_ball_2.webp',
      'cinematic-stills/16-9/regency_ball_3.webp',
      'cinematic-stills/16-9/regency_ball_4.webp',
      'cinematic-stills/16-9/regency_ball_5.webp',
      'cinematic-stills/16-9/regency_ball_6.webp',
    ],
  },
  {
    title: 'Samurai Dusk',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/samurai_dusk.webp',
      'cinematic-stills/16-9/samurai_dusk_2.webp',
      'cinematic-stills/16-9/samurai_dusk_3.webp',
      'cinematic-stills/16-9/samurai_dusk_4.webp',
      'cinematic-stills/16-9/samurai_dusk_5.webp',
      'cinematic-stills/16-9/samurai_dusk_6.webp',
    ],
  },
  {
    title: 'Scifi Spacer',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/scifi_spacer.webp',
      'cinematic-stills/16-9/scifi_spacer_2.webp',
      'cinematic-stills/16-9/scifi_spacer_3.webp',
      'cinematic-stills/16-9/scifi_spacer_4.webp',
      'cinematic-stills/16-9/scifi_spacer_5.webp',
      'cinematic-stills/16-9/scifi_spacer_6.webp',
    ],
  },
  {
    title: 'Spy 70s',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/spy_70s.webp',
      'cinematic-stills/16-9/spy_70s_2.webp',
      'cinematic-stills/16-9/spy_70s_3.webp',
      'cinematic-stills/16-9/spy_70s_4.webp',
      'cinematic-stills/16-9/spy_70s_5.webp',
      'cinematic-stills/16-9/spy_70s_6.webp',
    ],
  },
  {
    title: 'Submarine Officer',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/submarine_officer.webp',
      'cinematic-stills/16-9/submarine_officer_2.webp',
      'cinematic-stills/16-9/submarine_officer_3.webp',
      'cinematic-stills/16-9/submarine_officer_4.webp',
      'cinematic-stills/16-9/submarine_officer_5.webp',
      'cinematic-stills/16-9/submarine_officer_6.webp',
    ],
  },
  {
    title: 'Viking Shieldmaiden',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/viking_shieldmaiden.webp',
      'cinematic-stills/16-9/viking_shieldmaiden_2.webp',
      'cinematic-stills/16-9/viking_shieldmaiden_3.webp',
      'cinematic-stills/16-9/viking_shieldmaiden_4.webp',
      'cinematic-stills/16-9/viking_shieldmaiden_5.webp',
      'cinematic-stills/16-9/viking_shieldmaiden_6.webp',
    ],
  },
  {
    title: 'Western Frontierwoman',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/western_frontierwoman.webp',
      'cinematic-stills/16-9/western_frontierwoman_2.webp',
      'cinematic-stills/16-9/western_frontierwoman_3.webp',
      'cinematic-stills/16-9/western_frontierwoman_4.webp',
      'cinematic-stills/16-9/western_frontierwoman_5.webp',
      'cinematic-stills/16-9/western_frontierwoman_6.webp',
    ],
  },
  {
    title: 'Western Gunslinger',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/western_gunslinger.webp',
      'cinematic-stills/16-9/western_gunslinger_2.webp',
      'cinematic-stills/16-9/western_gunslinger_3.webp',
      'cinematic-stills/16-9/western_gunslinger_4.webp',
      'cinematic-stills/16-9/western_gunslinger_5.webp',
      'cinematic-stills/16-9/western_gunslinger_6.webp',
    ],
  },
  {
    title: 'Ww2 Resistance',
    template:
      'Create a cinematic production still for {scene_type} with {narrative_element}, {character_focus} in a {setting_style} with {cinematography_style} and {lighting_mood}. Include {production_value_detail}. Rendered as {visual_style}. cinematic, dramatic, movie-quality, ultra detailed, 8K, professional photography.',
    imgs: [
      'cinematic-stills/16-9/ww2_resistance.webp',
      'cinematic-stills/16-9/ww2_resistance_2.webp',
      'cinematic-stills/16-9/ww2_resistance_3.webp',
      'cinematic-stills/16-9/ww2_resistance_4.webp',
      'cinematic-stills/16-9/ww2_resistance_5.webp',
      'cinematic-stills/16-9/ww2_resistance_6.webp',
    ],
  },
];
