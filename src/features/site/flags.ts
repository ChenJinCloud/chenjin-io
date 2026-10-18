/**
 * Phase 2 surfaces (login, private workspace, account, subsite notices) have no
 * backend yet. They stay in the tree but respond 404 unless PHASE2_ENABLED=1.
 */
export const phase2Enabled = process.env.PHASE2_ENABLED === '1';
