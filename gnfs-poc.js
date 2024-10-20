function L_N(bits, c) {
    const N = Math.pow(2, bits);
    const log_N = Math.log(N);
    const log_log_N = Math.log(log_N);
    return Math.exp(c * Math.pow(log_N, 1/3) * Math.pow(log_log_N, 2/3));
}

// Parameters for NFS complexity
const c = Math.pow(64/9, 1/3);

// Calculate L_N for 829 bits and 1024 bits
const L_829 = L_N(829, c);
const L_1024 = L_N(1024, c);

// Scaling factor
const scaling_factor = L_1024 / L_829;
console.log(scaling_factor);
